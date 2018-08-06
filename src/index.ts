import m from 'mithril'

const C: m.Component = {
    view() {
        return m('h1', 'Hello')
    }
}

m.mount(document.body, C)
