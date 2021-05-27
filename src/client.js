import * as sapper from '@sapper/app';

if (window.location.hash && window.location.hash.includes("download")) {
	window.open("/qb" + window.location.hash, "_blank");
	history.back();
}

sapper.start({
	target: document.querySelector('#sapper')
});