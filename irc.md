```
Clients  
weechat - simplified CLI - use this  
irissi - advanced old CLI  
hexchat - IRC GUI  
pidgin - multiuse GUI  
https://weechat.org/files/doc/devel/weechat_quickstart.en.html  
  
Basics  
/set irc.look.temporary_servers on        might have to do this  
/connect irc.freenode.net                 connect to server  
/nick newnickname                         change your nickname  
  
/join #channel                            join a channel  
/join #ubuntu,#kde,#kubuntu               join multiple channels  
/join #mynewchannel                       if the channel does not exist, it gets created with you as owner  
/leave #channel                           leave a channel  
  
F9 F10                scroll the header bar  
F11 F12               scroll the user list    (F11 conflicts with full screen on ubuntu)  
page up/down             scroll thru the conversation  
alt arrows left/right    toggle between buffers  
/buffer close            closes a buffer  
  
/quit                   disconnect from server  
  
/window splitv          splits the windows vertically  
/window splith          horizontal  
/window merge all       bring windows together again  
  
/help  
/help connect  
  
Options  
/set                          displays all option  
/set weechat.*     display all weechat options  
/set irc.*  
/help weechat.look.highlight  
  
nickserv is a bot.  there are many bots.  
/msg nickserv help  
/msg nickserv register <password> <email>  
/msg nickserv identify <password>  
/nick  mynewnickname   change your nickname  
  
/server add freenode chat.freenode.net     add IRC server  
  
/list      list channels, but this is waaay too long  
/list *something*     doesnt work, still lists all  
/msg alis list *python*  
  
/names #channel-name    Shows the nicknames of all users on that channel  
/who <nick> - This allows you to get more information about someone in a channel.  
/whois <nick>    lookup info on a nickname  
/msg - have a private chat with the nick you've specified and will send them the message to kick off the chat  
/invite - This allows you to invite a user to another channel for a chat.  
/away - Tells users that you're away from your PC for a bit  
  
/plugin      list loaded plugins  
  
Package / Script Management  
weeget is old/obsolete, dont use it, use /script instead  
/script     list available scripts  
alt i to install, alt r to remove  
/minesweeper    use name of script to run it  
useful scripts:   iset, buffers  
  
/script install buffers.pl  
/set weechat.bar.buffers.size_max 15  
/set weechat.bar.buffers.position bottom  
  
```  
