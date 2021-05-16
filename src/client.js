import * as sapper from '@sapper/app';

if (window.location.hash && window.location.hash.includes("download")) {
	window.location = "/qb" + window.location.hash;
}

sapper.start({
	target: document.querySelector('#sapper')
});