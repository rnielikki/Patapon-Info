# callSysMsgLabel

Display information message above/below the screen. Unlike dialog, this doesn't interrupt key input.

For [real message full ID](./guide/about-message.md#message-id), use [callSysMsgLabel](./callsysmsglabel.md) instead.

## Code Information

- **Name**: `callSysMsgLabel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 22 00`
- **Assembly Address in Memory** : `0x894b76c`

## Parameters

- `(int)message_id` *(8 bytes)* : The text message ID.
  - This is message ID from **message address table in the PAC file**. Details on: [about message table](./guide/about-message.md#message-table).
- `(float)position_x` *(8 bytes)* : X Posiiton of the message.
- `(float)position_y` *(8 bytes)* : Y Posiiton of the message.
- `(float)duration` *(8 bytes)* : Display time for the message, as *seconds*.

## Example

Here is one example in hex:

```25 0a 22 00 / 04 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 f0 43 / 10 00 00 00 / 00 00 00 41 / 10 00 00 00 / 00 00 60 40```

Which is interpreted as:

```c
callSysMsgLabel((int *)iVar0, (float)480, (float)8, (float)3.5)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894b76c(int param_1,undefined4 param_2)

{
  undefined4 *message;
  float *pfVar1;
  undefined4 uVar2;
  float xpos;
  float ypos;
  float duration;
  float local_8;
  float local_4;
  
  message = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar2 = *message;
  pfVar1 = (float *)Pac_Get_Param(param_2,1,1,4);
  xpos = *pfVar1;
  pfVar1 = (float *)Pac_Get_Param(param_2,2,1,4);
  ypos = *pfVar1;
  pfVar1 = (float *)Pac_Get_Param(param_2,3,1,4);
  duration = *pfVar1;
  if (*(int *)(param_1 + 0x10) != 0) {
    uVar2 = Get_FullMessage(param_2,uVar2);
    local_8 = (float)(int)xpos;
    local_4 = (float)(int)ypos;
    FUN_089ceb50((float)(int)duration,
                 *(undefined4 *)(*(int *)(*(int *)(param_1 + 0x10) + 0x374) + 0x74),uVar2,&local_8);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```
