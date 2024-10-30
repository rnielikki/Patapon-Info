# How To: Set Speech Bubble

## Warmup
1. Get **the handle** to speak. Check e.g. [How To: Create an Enemy Target](./how-to-create-an-enemy-target.md) and/or [How To: Get a Handle](./how-to-get-a-handle.md)
2. Check **[Message ID table](./about-message.md#message-table)** of the PAC file, and get the address of it.

## Creating the speech bubble

1. First, use [callMessageWindow](../callmessagewindow.md) and **get message handle**.
2. Set other priority with *the handle*.
  - **[setMsgWndPriority](../setmsgwndpriority.md)** to set message on the top (or desired priority).
  - [keyCloseMessageWindow](../keyclosemessagewindow.md) to add X button (user input closes the speech bubble).
  - [setMsgWndColor](../setmsgwndcolor.md) to set background colour.

## Example

This is speech bubble code in Perfect March Practicing.

This gets talking sign handle with [gimmick_getHandle](../gimmick_gethandle.md).

```
000017B4  25190100:gimmick_getHandle(2:64, 4:A)
000017C8  250B0100:playSe(2:1D300A60, 0.0, 1.0, 0.0, 0.0, 1.0)
000017FC  25172D00:callMessageWindow(4:A, 8:37, 0.0, 60.0, -1.0, 2:FFFFFFFF, 2:0, 1:5E33C, 2:0)
00001844  25173100:setMsgWndPriority(8:37, 2:F423F)
00001858  25172F00:keyCloseMessageWindow(8:37, 2:9, 2:4000, 2:0)
```

This is part of chat message speech bubble.
```
00011E9C  25172D00:callMessageWindow(4:D, 4:0, 0.0, 50.0, 3.0, 2:FFFFFFFF, 2:0, 1:60AAC, 2:1)
00011EE4  25173200:setMsgWndColor(4:0, 2:F0, 2:D2, 2:8C)
00011F08  25173100:setMsgWndPriority(4:0, 2:F423F)
```