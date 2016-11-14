import {expect} from 'chai';
import * as sinon from 'sinon';

import {Signal} from "../src/lib/Signal";
import {Signal1} from "../src/lib/Signal1";

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
			expect(handler).to.have.been.calledOnce;
		});

		it('called twice', () =>
		{
			var signal = new Signal();
			var handler = sinon.spy();
			signal.connect(handler);
			signal.emit();
			signal.emit();
			expect(handler).to.have.been.calledTwice;

		});
		//
		it('called thrice', () =>
		{
			var signal = new Signal();
			var handler = sinon.spy();
			signal.connect(handler);
			signal.emit();
			signal.emit();
			signal.emit();
			expect(handler).to.have.been.calledThrice;
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

		it('has no listeners after disconnect all has been called', () =>
		{
			var signal = new Signal();
			var handler = sinon.spy();
			signal.connect(handler);
			signal.connect(handler);
			signal.connect(handler);
			signal.emit();
			signal.disconnectAll();

			expect(signal.hasListeners()).false;
		});
	});

	describe('# emit 1 property', () =>
	{
		// it('called once', () =>
		// {
		// 	var signal = new Signal1();
		// 	var handler = sinon.spy();
		// 	signal.connect(handler);
		// 	signal.emit('foo');
		// 	expect(handler).calledWith("foo");
		// });

		it('has no listeners after disconnect all has been called', () =>
		{
			var signal = new Signal1();
			var handler = sinon.spy();
			signal.connect(handler);
			signal.emit("foo");
			signal.disconnectAll();

			expect(signal.hasListeners()).false;
		});
	});

});
