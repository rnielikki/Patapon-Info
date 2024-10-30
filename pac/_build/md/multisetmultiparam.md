# multiSetMultiParam

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `multiSetMultiParam`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 0d 00`
- **Assembly Address in Memory** : `0x8919d2c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 0d 00 / 10 00 00 00 / 00 00 7a 44 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / cd cc 4c 3e / 10 00 00 00 / 89 88 88 3e```

Which is interpreted as:

```c
multiSetMultiParam((float)1000, (float)0, (float)0.2, (float)0.26666668)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08919d2c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int iVar5;
  undefined4 uVar6;
  undefined4 uVar7;
  undefined4 uVar8;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  iVar5 = *(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x2c) + 0x54);
  if (iVar5 != 0) {
    uVar7 = *puVar4;
    uVar8 = *puVar2;
    uVar6 = *puVar1;
    *(undefined4 *)(iVar5 + 0x4500) = *puVar3;
    *(undefined4 *)(iVar5 + 0x4504) = uVar7;
    *(undefined4 *)(iVar5 + 0x4508) = uVar6;
    *(undefined4 *)(iVar5 + 0x450c) = uVar8;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

