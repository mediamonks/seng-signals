/*
 * Signal2
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

import "ts-helpers";
import {SignalAbstract} from "./SignalAbstract";
import {SignalConnection} from "./SignalConnection";

/**
 * @author Mient-jan Stelling
 * @class Signal2
 */
export class Signal2<T1, T2> extends SignalAbstract
{
	/**
	 * Emit the signal, notifying each connected listener.
	 *
	 * @method emit
	 */
	public emit(arg1:T1, arg2:T2):void
	{
		if(this.dispatching())
		{
			this.defer(() => this.emitImpl(arg1, arg2));
		}
		else
		{
			this.emitImpl(arg1, arg2);
		}
	}

	private emitImpl(arg1:T1, arg2:T2):void
	{
		var head = this.willEmit();
		var p:SignalConnection|null = head;

		while(p != null)
		{
			p._listener(arg1, arg2);

			if(!p.stayInList)
			{
				p.dispose();
			}
			p = p._next;
		}

		this.didEmit(head);
	}
}

