# cameraSetControlLimit

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `cameraSetControlLimit`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 ba 00`
- **Assembly Address in Memory** : `0x8923a00`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 ba 00 / 20 00 00 00 / 00 00 00 00 / 20 00 00 00 / 02 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
cameraSetControlLimit((float *)fVar0, (float *)fVar2, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08923a00(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int *piVar3;
  int iVar4;
  undefined4 uVar5;
  undefined4 uVar6;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = *(int *)(param_1 + 0x10);
  if (iVar4 != 0) {
    if (*piVar3 == 0) {
      uVar6 = *puVar2;
      uVar5 = *puVar1;
      iVar4 = FUN_0890fa6c(*(undefined4 *)(iVar4 + 0xd8));
      *(undefined4 *)(iVar4 + 0x4dc) = uVar5;
      *(undefined4 *)(iVar4 + 0x4e4) = uVar6;
    }
    else {
      uVar5 = *puVar1;
      uVar6 = *puVar2;
      iVar4 = FUN_0890fa6c(*(undefined4 *)(iVar4 + 0xd8));
      *(undefined4 *)(iVar4 + 0x4d8) = uVar5;
      *(undefined4 *)(iVar4 + 0x4e0) = uVar6;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

