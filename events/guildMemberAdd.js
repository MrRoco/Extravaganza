module.exports = (client, member) => {
    member.send(
        `Welcome to the Extravaganza 1v1 tournament, type !commands for the commands needed to participate. Good Luck & Have Fun 😀`
    )

    var role= member.guild.roles.cache.find(role => role.name === "Players");
    member.roles.add(role);
}