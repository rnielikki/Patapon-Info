# disableKillTimer

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `disableKillTimer`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 25 00`
- **Assembly Address in Memory** : `0x89132a8`

## Parameters

- `(int)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 25 00 / 04 00 00 00 / 32 00 00 00```

Which is interpreted as:

```c
disableKillTimer((int *)iVar50)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089132a8(int param_1,undefined4 param_2)

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
      (**(code **)(*(int *)(iVar2 + 4) + 0x84))(iVar2);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

