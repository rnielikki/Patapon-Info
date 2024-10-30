# del

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `del`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 28 00`
- **Assembly Address in Memory** : `0x89134b4`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 28 00 / 04 00 00 00 / 18 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
del((int *)iVar24, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089134b4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  if ((iVar3 != 0) && (iVar5 = *(int *)(iVar3 + 0xcc), iVar5 != 0)) {
    iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3);
    if (iVar4 == 0xb) {
      (**(code **)(*(int *)(iVar3 + 4) + 0x88))(*puVar2,0,iVar3);
    }
    else if (iVar4 == 10) {
      (**(code **)(*(int *)(iVar3 + 4) + 0x8c))(*puVar2,0,iVar3);
    }
    else if (iVar4 == 9) {
      (**(code **)(*(int *)(iVar3 + 4) + 0x8c))(*puVar2,0,iVar3);
    }
    else {
      FUN_088984d4(iVar5);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

