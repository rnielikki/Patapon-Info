# setMsgWndPriority

Decides how top the speech bubble should be (render priority).

See also [How To: Set Speech Bubble](./guide/how-to-set-speech-bubble.md)

## Code Information

- **Name**: `setMsgWndPriority`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 31 00`
- **Assembly Address in Memory** : `0x8914140`

## Parameters

- `(int *)speech_bubble_id` *(8 bytes)* : Speech Bubble window ID, obtained from [callMessageWindow](./callmessagewindow.md) 2nd parameter.
- `(int)priority` *(8 bytes)* : Speech bubble priority (how top it is). Set `0xF423F` (999999) to ensure the message is on the top.

Higher priority value covers the lower value priority on the screen.

Note the high priority value is required for covering UI.

For example, to cover VS UI at least `0xC38E8` (801000) priority is required.

## Example

Here is one example in hex:

```25 17 31 00 / 08 00 00 00 / 5b 00 00 00 / 02 00 00 00 / 3f 42 0f 00```

Which is interpreted as:

```c
setMsgWndPriority(((global)int *)giVar91, (int)999999)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08914140(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if (*piVar1 != -1) {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if (iVar3 != 0) {
      (**(code **)(*(int *)(iVar3 + 4) + 0x100))(iVar3,*puVar2);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

