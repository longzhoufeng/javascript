require.config({
    baseUrl: "",
    /* urlArgs:"v=" + (new Date()).getTime(), */
    paths: {
        "angular": "../lib/angular",
        "jquery": "../lib/jquery.min",
        "jquerynicescroll": "../lib/jquerynicescroll"
    },
    shim: {
        "angular": {
            deps: ['jquery'],
            exports: "angular"
        },
        "jquerynicescroll":{
            deps:["jquery"],
            exports:"jquerynicescroll"
        }
    },
    packages:[{
		name : 'app',
		location : 'app'
	},{
		name : 'common',
		location : 'common'
	},{
		name : 'models',
		location : 'common/models'
	},{
		name : 'services',
		location : 'common/services'
	},{
        name : 'lib',
        location : 'lib'
    }]
});
