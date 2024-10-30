# closeMessageWindow

Closes an acivte bubble speech immediately.

This does not have the close button. For close button, see [keyCloseMessageWindow](./keyclosemessagewindow.md).

## Code Information

- **Name**: `closeMessageWindow`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 2e 00`
- **Assembly Address in Memory** : `0x8913cdc`

## Parameters

- `(int *)speech_bubble_id` *(8 bytes)* : Speech Bubble window ID, obtained from [callMessageWindow](./callmessagewindow.md) 2nd parameter.

## Example

Here is one example in hex:

```25 17 2e 00 / 08 00 00 00 / 35 00 00 00```

Which is interpreted as:

```c
closeMessageWindow(((global)int *)giVar53)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08913cdc(int param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  if (*piVar1 != -1) {
    iVar2 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    if (iVar2 != 0) {
      (**(code **)(*(int *)(iVar2 + 4) + 0xf0))(iVar2);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

