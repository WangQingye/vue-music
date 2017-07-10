/**
 * Created by wqy on 2017/7/10.
 */

export function addClass (el, className) {
	if (hasClass(className))
	{
		return
	}
	let newClass = el.className.split(' ')
	newClass.push(className)
	el.className = newClass.join(' ')
}

export function hasClass (el, className) {
	let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
	return reg.test(el.className)
}