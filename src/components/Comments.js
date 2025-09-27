export const comments = [
  {
    id: 1,
    author: "Rajesh",
    text: "This article was incredibly detailed and well-researched. I especially appreciated the real-world examples you provided about optimizing API calls — they clarified many of my doubts. Looking forward to more deep dives like this!",
    timestamp: "2025-09-26T09:15:23Z",
    likes: 24,
    dislikes: 1,
    replies: [
      {
        id: 11,
        author: "Priya",
        text: "Absolutely agree with Rajesh. The section on caching strategies was a game-changer for my latest project — cutting response times by nearly half.",
        timestamp: "2025-09-26T09:17:01Z",
        likes: 15,
        dislikes: 0,
        replies: [
          {
            id: 21,
            author: "Anjali",
            text: "I tried implementing the cache-busting technique mentioned here, but ran into CORS issues. Has anyone overcome that?",
            timestamp: "2025-09-26T09:18:45Z",
            likes: 7,
            dislikes: 2,
            replies: [
              {
                id: 31,
                author: "Vikram",
                text: "Anjali, you can configure your server to send the appropriate Access-Control-Allow-Origin headers. That solved it for me.",
                timestamp: "2025-09-26T09:20:02Z",
                likes: 12,
                dislikes: 0,
                replies: []
              },
              {
                id: 32,
                author: "Deepika",
                text: "Also ensure your preflight OPTIONS requests are allowed. Some frameworks require explicit settings.",
                timestamp: "2025-09-26T09:21:17Z",
                likes: 9,
                dislikes: 1,
                replies: []
              }
            ]
          }
        ]
      },
      {
        id: 12,
        author: "Karan",
        text: "One question: how would these optimizations hold up under a sudden traffic spike of 10K requests/sec? Any thoughts on autoscaling thresholds?",
        timestamp: "2025-09-26T09:19:15Z",
        likes: 18,
        dislikes: 0,
        replies: [
          {
            id: 41,
            author: "Meera",
            text: "For autoscaling, I recommend setting CPU and memory thresholds around 60–70% with rapid scale-out policies. That worked well for our microservices.",
            timestamp: "2025-09-26T09:23:09Z",
            likes: 11,
            dislikes: 0,
            replies: []
          },
          {
            id: 42,
            author: "Sachin",
            text: "You can also leverage event-driven scaling using Kubernetes HPA based on custom metrics like request latency.",
            timestamp: "2025-09-26T09:24:55Z",
            likes: 14,
            dislikes: 0,
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    author: "Sunita",
    text: "I encountered a null reference bug in the code snippet under section 3. It threw an exception when the user profile was empty. Has someone filed an issue on GitHub yet?",
    timestamp: "2025-09-26T09:22:35Z",
    likes: 9,
    dislikes: 2,
    replies: [
      {
        id: 13,
        author: "Arjun",
        text: "Sunita, I did. You can track it here: issue #45. The maintainer is working on a patch.",
        timestamp: "2025-09-26T09:25:01Z",
        likes: 8,
        dislikes: 0,
        replies: [
          {
            id: 43,
            author: "Naina",
            text: "Patch merged in PR #47. Update to v2.1.3 and you should be good.",
            timestamp: "2025-09-26T09:27:11Z",
            likes: 10,
            dislikes: 0,
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 3,
    author: "Ankit",
    text: "The recursion example in section 4 is elegant, but could use a more detailed breakdown of the call stack levels. I got a bit lost when it jumped from call depth 3 to base case.",
    timestamp: "2025-09-26T09:30:18Z",
    likes: 13,
    dislikes: 1,
    replies: [
      {
        id: 14,
        author: "Divya",
        text: "Think of each recursive call as pushing a frame to the stack. At depth 3, your function parameters are preserved until you hit the base case and then start popping.",
        timestamp: "2025-09-26T09:32:33Z",
        likes: 11,
        dislikes: 0,
        replies: []
      },
      {
        id: 15,
        author: "Rohan",
        text: "I drew a diagram of the stack frames which helped me visualize it better. Will share the gist soon.",
        timestamp: "2025-09-26T09:33:09Z",
        likes: 6,
        dislikes: 0,
        replies: [
          {
            id: 51,
            author: "Sneha",
            text: "Thanks Rohan! That diagram would be super helpful for newcomers.",
            timestamp: "2025-09-26T09:34:42Z",
            likes: 8,
            dislikes: 0,
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 4,
    author: "Manish",
    text: "Has anyone benchmarked the performance with 5K concurrent users? I'm curious about the latency distribution across regions.",
    timestamp: "2025-09-26T09:39:02Z",
    likes: 7,
    dislikes: 0,
    replies: [
      {
        id: 16,
        author: "Priyanka",
        text: "On AWS, I ran a JMeter test with 5K threads and saw 95th percentile p99 latency at around 250ms in us-east-1.",
        timestamp: "2025-09-26T09:41:16Z",
        likes: 10,
        dislikes: 0,
        replies: [
          {
            id: 61,
            author: "Vivek",
            text: "Did you enable HTTP/2? It significantly reduced overhead on TLS handshakes.",
            timestamp: "2025-09-26T09:41:51Z",
            likes: 9,
            dislikes: 0,
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 5,
    author: "Bhavana",
    text: "The proposed UI tweaks are spot-on, but a dark mode toggle would further enhance accessibility for night-time reading sessions.",
    timestamp: "2025-09-26T09:44:53Z",
    likes: 22,
    dislikes: 0,
    replies: [
      {
        id: 17,
        author: "Kavita",
        text: "I second that. Also consider high-contrast text options for visually impaired users.",
        timestamp: "2025-09-26T09:46:23Z",
        likes: 14,
        dislikes: 0,
        replies: []
      }
    ]
  },
  {
    id: 6,
    author: "Chirag",
    text: "Could someone share example JSON files with nested arrays and objects? I'm testing various edge cases.",
    timestamp: "2025-09-26T09:48:30Z",
    likes: 5,
    dislikes: 1,
    replies: [
      {
        id: 18,
        author: "Nisha",
        text: "Check out this repo: github.com/example/nested-json-tests — it covers most edge scenarios.",
        timestamp: "2025-09-26T09:49:45Z",
        likes: 9,
        dislikes: 0,
        replies: []
      }
    ]
  },
  {
    id: 7,
    author: "Rahul",
    text: "Is there an AI-based moderation tool you’d recommend? Something that flags spam and abusive replies automatically.",
    timestamp: "2025-09-26T09:51:17Z",
    likes: 8,
    dislikes: 0,
    replies: [
      {
        id: 19,
        author: "Megha",
        text: "Perspective API by Google works well for toxicity detection. You can integrate it in the moderation workflow.",
        timestamp: "2025-09-26T09:53:29Z",
        likes: 12,
        dislikes: 0,
        replies: [
          {
            id: 71,
            author: "Tarun",
            text: "Also consider IBM Watson’s Natural Language Understanding for sentiment and keyword analysis.",
            timestamp: "2025-09-26T09:54:54Z",
            likes: 7,
            dislikes: 0,
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 8,
    author: "Swati",
    text: "For accessibility, adding ARIA labels is great, but also ensure keyboard navigation and focus states are clearly defined.",
    timestamp: "2025-09-26T09:55:40Z",
    likes: 16,
    dislikes: 0,
    replies: []
  },
  {
    id: 9,
    author: "Prateek",
    text: "Do thread notifications currently send emails, or only in-app? Would love an email digest option for daily summaries.",
    timestamp: "2025-09-26T09:57:09Z",
    likes: 4,
    dislikes: 0,
    replies: [
      {
        id: 20,
        author: "Ritu",
        text: "Only in-app notifications exist now. Email digest is on the roadmap for Q4 release.",
        timestamp: "2025-09-26T09:58:23Z",
        likes: 11,
        dislikes: 0,
        replies: []
      }
    ]
  },
  {
    id: 10,
    author: "Suresh",
    text: "What authentication strategies are used here? JWT plus refresh tokens? And can we plug in OAuth providers like Google or Facebook?",
    timestamp: "2025-09-26T09:59:37Z",
    likes: 19,
    dislikes: 0,
    replies: [
      {
        id: 21,
        author: "Anu",
        text: "Yes – JWT with refresh on the server side. OAuth integration with Passport.js works seamlessly too.",
        timestamp: "2025-09-26T10:00:58Z",
        likes: 13,
        dislikes: 0,
        replies: [
          {
            id: 81,
            author: "Rakesh",
            text: "For enterprise, consider SAML or OpenID Connect for SSO across services.",
            timestamp: "2025-09-26T10:02:22Z",
            likes: 8,
            dislikes: 0,
            replies: []
          }
        ]
      }
    ]
  }
];
