var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%= username%></div>
        <div class ="date"><%= createdAt%></div>
        <div><%= text%></div>
      </div>`)
};