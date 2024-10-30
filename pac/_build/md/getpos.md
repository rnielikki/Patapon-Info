# getPos

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getPos`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 06 00`
- **Assembly Address in Memory** : `0x897054c`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 0c 06 00 / 02 00 00 00 / ff ff ff ff / 20 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getPos((int)-1, (float *)fVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0897054c(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  undefined4 uVar5;
  int local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0;
  iVar4 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  if (iVar4 != 0) {
    iVar3 = *piVar1;
    if (iVar3 < 0) {
      iVar3 = Get_Some_Flag(1);
      local_4 = *(int *)(*(int *)(iVar3 + 0x44) + 0x28);
      if (DAT_08a71d58 < local_4) {
        piVar1 = &local_4;
      }
      else {
        piVar1 = &DAT_08a71d58;
      }
      iVar3 = *piVar1;
    }
    uVar5 = func_0x08b5f800(iVar4,iVar3);
    *puVar2 = uVar5;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

