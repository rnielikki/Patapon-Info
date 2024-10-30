# About Message

## Message ID

Each message file has "Message ID".

Usually, "Message ID" means Full ID (`(message_file_id)*0x10000 + message_index`) of the message.

Those are Message table IDs:

|ID|Message File Name|Note|Location|
|---|---|---|
|0x0|azito.msg|Messages in Hideout|`DATA_CMN.bnd/message/azitolocal/azito_msg/`|
|0x0|(mission_id).msg|Messages during Mission|`DATA_CMN.bnd/message/azitolocal/(mission_id)_msg`|
|0x1|itemmsg.msg|Item names and descriptions|`DATA_CMN.bnd/loadinggroup/systemlocalizedata/localize/`|
|0x2|unitnamemsg.msg|Unit/Skill name and description|`DATA_CMN.bnd/loadinggroup/systemlocalizedata/localize/`|
|0x3|systemmsg.msg|Information messages|`DATA_CMN.bnd/loadinggroup/systemlocalizedata/localize/`|
|0x5|errormessage.msg|Important system notifications|`DATA_CMN.bnd/loadinggroup/systemlocalizedata/localize/`|
|0x9|tipsmsg.msg|Tip messages|`DATA_CMN.bnd/loadinggroup/systemlocalizedata/localize/`|
|0xA|chatmsg.msg|Selectable quip messages|`DATA_CMN.bnd/loadinggroup/systemlocalizedata/localize/`|

To check each message ID, open message file and read the ID with e.g. MsgEdit tool.

Or [this](https://rnielikki.github.io/pata/quip/) might help if you can read the cheat codes.

## Message Table

Message table is array of message IDs **stored in PAC file**.

They are series of message IDs like `00 00 00 00 / 01 00 00 00 / 02 00 00 00...`

The message IDs in table is full message ID, so it is also possible to put other global messages there, like system messages.

If you are using certain PAC instructions e.g. [callMessageWindow](../callmessagewindow.md), you must use reference from there.

For example, if you want to print `0x26B` speech bubble from `mission_01_02.pac`,<br>
search `6B 02 00 00` hex edtior to find the address (`0x71C24`), and pass the `0x71C24` as parameter.

It is possible to define message table by extending PAC file.<br>
In this case, put the message table after [cmd_end](../cmd_end.md).