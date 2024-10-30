# getStageGimmickParam

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getStageGimmickParam`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 1e 00`
- **Assembly Address in Memory** : `0x891ac50`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 1e 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getStageGimmickParam((int)0, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891ac50(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  undefined4 uVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Get_Some_Flag(1);
  uVar4 = Equip::Item::Divide_By_10000d
                    (*(int *)(*piVar1 * 0xc + *(int *)(iVar3 + 0x44) + 0x82c) >> 1);
  *puVar2 = uVar4;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

