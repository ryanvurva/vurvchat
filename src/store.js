import { observable, action } from 'mobx'
import db from './db'

class Store {
  @observable username = null
  @observable messages = {}

  @action load () {
    db.ref('messages').on('value', (snapshot) => {
      this.messages = snapshot.val()
    })
  }

  @action addMessage (text) {
    db.ref('messages').push().set({ text, username: this.username })
  }

  delete () {
    db.ref('messages').remove()
  }
}

const store = new Store()

export default store
