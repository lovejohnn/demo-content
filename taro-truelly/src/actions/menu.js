//显示抽屉
export function showDrawer() {
    return function (dispatch) {
        dispatch({ type: "showDrawer" })
    }
}

// 切换当前分类
export function changeCata(cata) {
    return dispatch => {
        dispatch({ type: 'changeCata', currentCata: cata })
    }
}

//
export function hideDrawer() {
    return function (dispatch) {
        dispatch({ type: 'hideDrawer' })
    }
}