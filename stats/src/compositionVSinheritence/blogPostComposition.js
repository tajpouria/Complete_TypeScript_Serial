const toggleOpen = (state) => ({toggleOpen: () => {state.open = !state.open}})

const buildRectangleWindow = (state) => {
  return Object.assign(state, toggleOpen(state))
}

const state = {open: false}

const reacAngleWindow = buildRectangleWindow(state)

console.log(reacAngleWindow.open)
reacAngleWindow.toggleOpen() 
console.log(reacAngleWindow.open) 

