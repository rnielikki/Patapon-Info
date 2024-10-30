# setGimmickFlag

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setGimmickFlag`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 25 00`
- **Assembly Address in Memory** : `0x8b5d6e8`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*
- `(int)Var3` *(8 bytes)*
- `(int)Var4` *(8 bytes)*

## Example

Here is one example in hex:

```25 1f 25 00 / 08 00 00 00 / 1a 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setGimmickFlag(((global)int *)giVar26, (int)0, (int)1, (int)0, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5d6e8(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int *piVar3;
  int *piVar4;
  int *piVar5;
  int iVar6;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  piVar5 = (int *)Pac_Get_Param(param_2,4,1,4);
  iVar6 = *(int *)(param_1 + 0x10);
  if (iVar6 == 0) {
    iVar6 = 0;
  }
  else if (*piVar1 == -1) {
    iVar6 = 0;
  }
  else {
    if (iVar6 == 0) {
      iVar6 = 0;
    }
    iVar6 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar6 + 0x2c8));
    if (iVar6 == 0) {
      iVar6 = 0;
    }
  }
  if (iVar6 != 0) {
    FUN_Mission__08b570e0(iVar6,*puVar2,*piVar3 != 0,*piVar4 != 0,*piVar5 != 0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

