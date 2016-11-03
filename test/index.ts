// require all test files
const testsContext = (<any> require).context(
	'./',
	true,
	/\.spec\.ts/
);

testsContext.keys().forEach(value => {
	testsContext(value);
});
//
// // require all source files
// const sourcesContext = require.context(
// 	'../src/',
// 	true,
// 	/\.ts$/
// );
//
// sourcesContext.keys().forEach(sourcesContext);
