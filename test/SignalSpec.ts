
import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';

import {Signal} from "../src/lib/Signal";

const {expect} = chai;
chai.use(sinonChai);

describe('Signal', () =>
{
	describe('# emit', () =>
	{
		it('called once', () =>
		{
			var signal = new Signal();
			let handler = sinon.spy();
			signal.connect(handler);

			signal.emit();
			expect(handler).calledOnce();
		});

		it('called twice', () =>
		{
			var signal = new Signal();
			let handler = sinon.spy();
			signal.connect(handler);

			signal.emit();
			signal.emit();
			expect(handler).calledTwice();
		});

		it('called thrice', () =>
		{
			var signal = new Signal();
			let handler = sinon.spy();
			signal.connect(handler);

			signal.emit();
			signal.emit();
			signal.emit();
			expect(handler).calledThrice();
		});

		it('has no listener', () =>
		{
			var signal = new Signal();
			let handler = sinon.spy();
			let connection = signal.connect(handler);

			connection.dispose();

			expect(signal.hasListeners()).should.be.false();
		});

		it('has listener', () =>
		{
			var signal = new Signal();
			let handler = sinon.spy();
			signal.connect(handler);

			expect(signal.hasListeners()).should.be.true();
		});
	});

});
