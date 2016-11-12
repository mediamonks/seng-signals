import {expect, assert} from 'chai';
import * as sinon from 'sinon';

import {Signal} from "../src/lib/Signal";

describe('Signal', () =>
{
	describe('# emit', () =>
	{
		it('called once', () =>
		{
			var signal = new Signal();
			var handler = sinon.spy();
			signal.connect(handler);
			signal.emit();
			expect(handler).to.have.been.called;
		});

		it('called twice', () =>
		{
			var signal = new Signal();
			var called = 0;
			let handler = () => {
				called++;
			};
			signal.connect(handler);
			signal.emit();
			signal.emit();
			assert.equal(called, 2);
		});
		//
		it('called thrice', () =>
		{
			var signal = new Signal();
			var called = 0;
			let handler = () => {
				called++;
			};
			signal.connect(handler);
			signal.emit();
			signal.emit();
			signal.emit();

			assert.equal(called, 3);
		});

		it('has no listener', () =>
		{
			var signal = new Signal();

			let connection = signal.connect(() => {});
			connection.dispose();

			expect(signal.hasListeners()).false;
		});

		it('has listener', () =>
		{
			var signal = new Signal();
			signal.connect(() => {});
			expect(signal.hasListeners()).true;
		});


	});

});
