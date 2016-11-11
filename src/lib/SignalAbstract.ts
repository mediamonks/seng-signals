/*
 * Signal
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Signal provides method for managing queues of a single event listener and dispatching it.
 **/

import {SignalConnection} from "./SignalConnection";

export class Task
{
	public fn:Function;
	public next:Task|null = null;

	constructor(fn:Function)
	{
		this.fn = fn;
	}
}

/**
 * @author Mient-jan Stelling
 * @class
 */
export class SignalAbstract
{
	public static DISPATCHING_SENTINEL:SignalConnection = new SignalConnection(null, null);

	private _head:SignalConnection|null;
	private _deferredTasks:Task|null = null;

	constructor(listener?:Function)
	{
		this._head = listener ? new SignalConnection(this, listener) : null;
	}

	/**
	 *
	 * @returns {boolean}
	 */
	public hasListeners():boolean
	{
		return this._head != null;
	}

	/**
	 *
	 * @param {Function} listener
	 * @param {boolean} prioritize
	 * @returns {SignalConnection}
	 */

	public connect(listener:Function, prioritize:boolean = false):SignalConnection
	{
		var conn:SignalConnection = new SignalConnection(this, listener);

		if(this.dispatching())
		{
			this.defer(() => this.listAdd(conn, prioritize));
		}
		else
		{
			this.listAdd(conn, prioritize);
		}

		return conn;
	}

	/**
	 *
	 * @param {SignalConnection} conn
	 */
	public disconnect(conn:SignalConnection):void
	{

		if(this._head == SignalAbstract.DISPATCHING_SENTINEL)
		{
			this.defer(() => this.listRemove(conn));
		}
		else
		{
			this.listRemove(conn);
		}
	}

	public defer(fn:() => void):void
	{
		var tail:Task|null = null;
		var p = this._deferredTasks;

		while(p != null)
		{
			tail = p;
			p = p.next;
		}

		var task:Task = new Task(fn);
		if(tail != null)
		{
			tail.next = task;
		}
		else
		{
			this._deferredTasks = task;
		}
	}

	public willEmit():SignalConnection|null
	{
		var snapshot = this._head;
		this._head = SignalAbstract.DISPATCHING_SENTINEL;
		return snapshot;
	}

	public didEmit(head:SignalConnection|null):void
	{
		var snapshot = this._deferredTasks;

		this._head = head;
		this._deferredTasks = null;

		while(snapshot != null)
		{
			snapshot.fn();
			snapshot = snapshot.next;
		}
	}

	public dispatching():boolean
	{
		return this._head == SignalAbstract.DISPATCHING_SENTINEL;
	}

	public listAdd(conn:SignalConnection, prioritize:boolean):void
	{
		if(prioritize)
		{
			conn._next = this._head;
			this._head = conn;
		}
		else
		{
			var tail:SignalConnection|null = null;
			var p:SignalConnection|null = <SignalConnection> this._head;

			while(p != null)
			{
				tail = p;
				p = p._next;
			}

			if(tail != null)
			{
				tail._next = conn;
			}
			else
			{
				this._head = conn;
			}
		}
	}

	public listRemove(conn:SignalConnection):void
	{
		var prev:SignalConnection|null = null;
		var p:SignalConnection|null = this._head;

		while(p != null)
		{
			if(p == conn)
			{
				var next = p._next;
				if(prev == null)
				{
					this._head = next;
				}
				else
				{
					prev._next = next;
				}
				return;
			}
			prev = p;
			p = p._next;
		}
	}
}

