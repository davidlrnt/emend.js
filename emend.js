Function.method('curry', function () { 
	var slice = Array.prototype.slice, 
		args = slice.apply(arguments),
		that = this; 
	return function () {
         return that.apply(null, args.concat(slice.apply(arguments)));
    };
});

Function.method('inherits', function (Parent) { 
	this.prototype = new Parent();
	return this;
});

var is_array = function (value) {
	return value &&
	    typeof value === 'object' &&
	    typeof value.length === 'number' &&
	    typeof value.splice === 'function' &&
	    !(value.propertyIsEnumerable('length'));
};

Array.dim = function (dimension, initial) {
        var a = [], 
        	i;
        for (i = 0; i < dimension; i += 1) {
            a[i] = initial;
		}
		return a; 
};
