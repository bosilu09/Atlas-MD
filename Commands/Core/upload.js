module.exports = {
    name: "upload",
    alias: ["hello","info"],
    desc: "Say hello to bot.",
    react: "⚡",
    category: "Core",
    start: async(Miku, m,{pushName,prefix,args}) => {
     await Miku.sendMessage(m.sender,{document:{url:"${args}",fileName:"hell.mp4"}},{quoted:m})
    }
}
