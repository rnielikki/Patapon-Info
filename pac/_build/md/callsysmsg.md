# callSysMsg

Display information message above/below the screen. Unlike dialog, this doesn't interrupt key input.

For using [message ID inside PAC instruction](./guide/about-message.md#message-table), use [callSysMsgLabel](./callsysmsglabel.md) instead.

## Code Information

- **Name**: `callSysMsg`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 21 00`
- **Assembly Address in Memory** : `0x894b668`

## Parameters

- `(int)message_id` *(8 bytes)* : The text message ID, as **[Full Message ID](./guide/about-message.md#message-id)**. The ID is **NOT from PAC instruction table**.
- `(float)position_x` *(8 bytes)* : X Posiiton of the message.
- `(float)position_y` *(8 bytes)* : Y Posiiton of the message.
- `(float)duration` *(8 bytes)* : Display time for the message, as *seconds*.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894b668(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  float *pfVar2;
  undefined4 uVar3;
  float fVar4;
  float fVar5;
  float local_8;
  float local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar3 = *puVar1;
  pfVar2 = (float *)Pac_Get_Param(param_2,1,1,4);
  fVar4 = *pfVar2;
  pfVar2 = (float *)Pac_Get_Param(param_2,2,1,4);
  fVar5 = *pfVar2;
  pfVar2 = (float *)Pac_Get_Param(param_2,3,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    local_8 = (float)(int)fVar4;
    local_4 = (float)(int)fVar5;
    FUN_089ceae4((float)(int)*pfVar2,
                 *(undefined4 *)(*(int *)(*(int *)(param_1 + 0x10) + 0x374) + 0x74),uVar3,&local_8);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

