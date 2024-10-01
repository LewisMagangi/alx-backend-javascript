module.export = {
    transform: {
	"^.+\\.js$": "babel-jest"
    },
    globals: {
	'ts-jest': {
	    useESM: true,
	    
	},
    },
};
