import {Event} from "./Event";

/*
 * Signal3
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

import {SignalAbstract} from "./SignalAbstract";

/**
 * @namespace core.events
 * @module weasel
 * @class Signal3
 */
export class Signal3<T1,T2,T3> extends SignalAbstract
{
	/**
	 * Emit the signal, notifying each connected listener.
	 *
	 * @method emit
	 */
	public emit(arg1:T1, arg2:T2, arg3:T3)
	{
		if(this.dispatching())
		{
			this.defer(() => this.emitImpl(arg1, arg2, arg3));
		}
		else
		{
			this.emitImpl(arg1, arg2, arg3);
		}
	}

	private emitImpl(arg1:T1, arg2:T2, arg3:T3)
	{
		var head = this.willEmit();
		var p = head;
		while(p != null)
		{
			p._listener(arg1, arg2, arg3)
			if(!p.stayInList)
			{
				p.dispose();
			}
			p = p._next;
		}
		this.didEmit(head);
	}
}

