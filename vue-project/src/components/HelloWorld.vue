<template>
  <div class="row">
    <div class="chat-box">
      <h3>Hello, {{ sender }}</h3>
      <h2>Transaction History</h2>
      <ul class="chats">
        <p id="wallet"></p>
        <li class="col" v-for="item in chats" :key="item">
          <div class="name">
            <strong>From : {{ item.sender }}</strong>
          </div>
          <div class="amount">Amount : Rs {{ item.rupee }}</div>
          <div class="amount">Time : {{ item.time }}</div>
        </li>
      </ul>
      <input type="text" v-model.lazy="rupee" placeholder="Enter amount here" />
      <input type="text" v-model.lazy="time" placeholder="Enter time of Transaction"/>
      <button class="button-submit" @click="handleSubmit">Send</button>
    </div>
  </div>
</template>
<script>
var wallet= 0;
import Pusher from "pusher-js";
// import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      rupee: "",
      time: "",
      chats: [],
    };
  },
  props: {
    sender: String,
  },
  methods: {
    subscribe() {
      const pusher = new Pusher("Your App Key", {
        cluster: "Your Cluster",
        authEndpoint: 'http://localhost:8000/pusher/user-auth',
      });
      this.channel = pusher.subscribe('private-my_channel');
      this.channel.bind('client-my_event', (msg) => {
        const newObj = JSON.parse(JSON.stringify(msg));
        this.chats = [...this.chats, newObj];
      });
    },
      handleSubmit(e) {
      e.preventDefault();
      const payload = {
        sender: this.sender,
        rupee: this.rupee,
        time: this.time,
      };
        wallet = wallet+ parseInt(payload.rupee);
        document.getElementById("wallet").innerHTML = payload.sender+' wallet = Rs '+ wallet;
      
      // axios.post(`http://localhost:5000/message/${this.room}`, payload);
      var wasTriggered = this.channel.trigger("client-my_event", payload);
      console.log(wasTriggered);
      this.chats = [...this.chats, payload];
      this.rupee = "";
      this.time= "";
    },
  },
  created() {
    this.subscribe();
  },
};
</script> 