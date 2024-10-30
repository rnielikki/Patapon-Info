# setMsgWndMsgType

Seems like this doesn't do much anything. Called when e.g. Deth dying.

Please decribe if you found what this does.

## Code Information

- **Name**: `setMsgWndMsgType`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 33 00`
- **Assembly Address in Memory** : `0x8914300`

## Parameters

- `(int *)speech_bubble_id` *(8 bytes)* : Speech Bubble window ID, obtained from [callMessageWindow](./callmessagewindow.md) 2nd parameter.
- `(undefined4)Var1` *(8 bytes)* : Usually it is 1.

## Example

Here is one example in hex:

```25 17 33 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setMsgWndMsgType((int *)iVar0, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08914300(int param_1,undefined4 param_2)

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
      (**(code **)(*(int *)(iVar3 + 4) + 0x128))(iVar3,*puVar2);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

