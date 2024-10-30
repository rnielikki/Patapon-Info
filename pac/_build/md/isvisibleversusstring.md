# isVisibleVersusString

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `isVisibleVersusString`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 f8 00`
- **Assembly Address in Memory** : `0x8927684`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(uint)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 f8 00 / 02 00 00 00 / 02 00 00 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
isVisibleVersusString((int)2, (int)0, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08927684(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  uint *puVar3;
  int iVar4;
  undefined4 uVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (uint *)Pac_Get_Param(param_2,2,1,4);
  uVar5 = *(undefined4 *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x2c) + 0x68);
  *puVar3 = 0;
  if (*piVar1 == 2) {
    iVar4 = func_0x08b36458(uVar5);
  }
  else if (*piVar1 == 1) {
    iVar4 = func_0x08b36460(uVar5,*puVar2);
  }
  else {
    iVar4 = func_0x08b36450();
  }
  if (iVar4 != 0) {
    *puVar3 = (uint)*(byte *)(iVar4 + 4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

