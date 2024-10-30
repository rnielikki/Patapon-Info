# setImitationSoundPosition

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setImitationSoundPosition`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 22 00`
- **Assembly Address in Memory** : `0x89713e0`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 0c 22 00 / 02 00 00 00 / 01 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setImitationSoundPosition((int)1, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089713e0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  undefined4 uVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(param_1 + 0x10);
  iVar5 = *(int *)(iVar3 + 0x158);
  if ((iVar5 != 0) && (iVar3 != 0)) {
    uVar4 = 0;
    if (-1 < *piVar2) {
      uVar4 = Find_Target_By_HandleID(*(undefined4 *)(iVar3 + 0xe8),*piVar2,1);
    }
    func_0x08b5f7b0(iVar5,*puVar1,uVar4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

