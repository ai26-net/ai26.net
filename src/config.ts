export default {
  stateOfBeingBase: 'https://raw.githubusercontent.com/krimlabs/state-of-being/master/',
  home: {
    icons: [
      { label: "Who?", href: "https://shivekkhurana.com/about", icon: "Info", color: "bg-gray-700 text-white" },
      { label: "Zag", href: "https://shivekkhurana.com/blog/zag/", icon: "Zap", color: "bg-sky-400 text-white" },
      { label: "Contact", href: "https://tally.so/r/dWx7gr", icon: "MessageCircle", color: "bg-green-400 text-white" },
    ],
  },
  vault: {
    workouts: '/vault/workouts.json',
    meditations: '/vault/meditations.json',
    sleep: '/vault/ultrahuman/sleep.json',
    sleepIndex: '/vault/ultrahuman/index.json',
  },
  content: {
    source: './content',
    sink: './content/index.json',
  },
};
