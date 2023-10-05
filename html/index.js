var options = {
    chart: {
      type: "area",
      height: 300,
      foreColor: "#999",
      stacked: true,
      dropShadow: {
        enabled: true,
        enabledSeries: [0],
        top: -2,
        left: 2,
        blur: 5,
        opacity: 0.06
      }
    },
    colors: ['#00E396', '#0090FF'],
    stroke: {
      curve: "smooth",
      width: 3
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: 'Total Views',
      data: generateDayWiseTimeSeries(0, 18)
    }, {
      name: 'Unique Views',
      data: generateDayWiseTimeSeries(1, 18)
    }],
    markers: {
      size: 0,
      strokeColor: "#fff",
      strokeWidth: 3,
      strokeOpacity: 1,
      fillOpacity: 1,
      hover: {
        size: 6
      }
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        offsetX: 14,
        offsetY: -5
      },
      tooltip: {
        enabled: true
      }
    },
    grid: {
      padding: {
        left: -5,
        right: 5
      }
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy"
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    },
    fill: {
      type: "solid",
      fillOpacity: 0.7
    }
  };

  var chart = new ApexCharts(document.querySelector("#timeline-chart"), options);

  chart.render();

  function generateDayWiseTimeSeries(s, count) {
    var values = [[
      4,3,10,9,29,19,25,9,12,7,19,5,13,9,17,2,7,5
    ], [
      2,3,8,7,22,16,23,7,11,5,12,5,10,4,15,2,6,2
    ]];
    var i = 0;
    var series = [];
    var x = new Date("11 Nov 2012").getTime();
    while (i < count) {
      series.push([x, values[s][i]]);
      x += 86400000;
      i++;
    }
    return series;
  }

  var options1 = {
    series: [{
    name: 'Website Blog',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: 'Social Media',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }],
    chart: {
    height: 350,
    type: 'line',
  },
  stroke: {
    width: [0, 4]
  },
  title: {
    text: 'Traffic Sources'
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  xaxis: {
    type: 'datetime'
  },
  yaxis: [{
    title: {
      text: 'Website Blog',
    },
  
  }, {
    opposite: true,
    title: {
      text: 'Social Media'
    }
  }]
  };

  var chart1 = new ApexCharts(document.querySelector("#chart"), options);
  chart1.render();
  
// Layout of chatbot
  const chatbotToggler = document.querySelector(".chatbot-toggler");
  const closeBtn = document.querySelector(".close-btn");
  const chatbox = document.querySelector(".chatbox");
  const chatInput = document.querySelector(".chat-input textarea");
  const sendChatBtn = document.querySelector(".chat-input span");

  let userMessage = null; // Variable to store user's message

  const createChatLi = (message, className) => {
      // Create a chat <li> element with passed message and className
      const chatLi = document.createElement("li");
      chatLi.classList.add("chat", `${className}`);
      let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
      chatLi.innerHTML = chatContent;
      chatLi.querySelector("p").textContent = message;
      return chatLi; // return chat <li> element
  }

  

  

  const generateResponse = () => {
    const userInput = userMessage.toLowerCase();

    // Check user's input for specific keywords or options
    // if (userInput.includes("hi")) {
    //     return "Hello! How can I assist you today?";
    // } else if (userInput.includes("option 1")) {
    //     return "You chose Option 1. Great choice!";
    // } else if (userInput.includes("option 2")) {
    //     return "You chose Option 2. Excellent!";
    // } else if (userInput.includes("option 3")) {
    //     return "You chose Option 3. Wonderful!";
    // } else {
    //     return "I don't understand your choice. Please select one of the available options.";
    // }
    switch (userInput) {
      case "hi": 
          return "Here are the menu options:\n1. Option 1\n2. Option 2\n3. Option 3";
      case "option 1":
          return "You selected Option 1. What would you like to do next?";
      case "option 2":
          return "You selected Option 2. How can I assist you?";
      case "option 3":
          return "You selected Option 3. Please provide more details about your request.";
      default:
          return "I don't understand. Please enter 'menu' to see the options.";
  }
}


  const handleChat = () => {
      userMessage = chatInput.value.trim(); // Get user-entered message and remove extra whitespace
      if (!userMessage) return;

      // Clear the input textarea
      chatInput.value = "";

      // Append the user's message to the chatbox
      chatbox.appendChild(createChatLi(userMessage, "outgoing"));
      chatbox.scrollTo(0, chatbox.scrollHeight);

      // Display "Thinking..." message
      const thinkingMessage = createChatLi("Thinking...", "incoming");
      chatbox.appendChild(thinkingMessage);
      chatbox.scrollTo(0, chatbox.scrollHeight);

      setTimeout(() => {
          // Display the chatbot's response and remove the "Thinking..." message
          const responseText = generateResponse();
          const incomingChatLi = createChatLi(responseText, "incoming");
          chatbox.appendChild(incomingChatLi);
          chatbox.removeChild(thinkingMessage);
          chatbox.scrollTo(0, chatbox.scrollHeight);
      }, 600);
  }

  chatInput.addEventListener("keydown", (e) => {
      // If Enter key is pressed without Shift key and the window 
      // width is greater than 800px, handle the chat
      if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
          e.preventDefault();
          handleChat();
      }
  });

  sendChatBtn.addEventListener("click", handleChat);
  closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
  chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));