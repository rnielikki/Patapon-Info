# setMsgWndApproachOnScreen

Sets "message approach on screen" value of the message handle.

Seems there is no difference to set this or not, tell if there is any difference.

## Code Information

- **Name**: `setMsgWndApproachOnScreen`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 30 00`
- **Assembly Address in Memory** : `0x8914080`

## Parameters

- `(int *)speech_bubble_id` *(8 bytes)* : Speech Bubble window ID, obtained from [callMessageWindow](./callmessagewindow.md) 2nd parameter.
- `(bool)is_approach` *(8 bytes)* : This enables or disables "approach on screen".

## Example

Here is one example in hex:

```25 17 30 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setMsgWndApproachOnScreen((int *)iVar0, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08914080(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  if (*piVar1 != -1) {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if (iVar3 != 0) {
      (**(code **)(*(int *)(iVar3 + 4) + 0xf8))(iVar3,*piVar2 != 0);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

