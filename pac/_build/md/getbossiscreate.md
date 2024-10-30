# getBossIsCreate

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getBossIsCreate`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 13 00`
- **Assembly Address in Memory** : `0x89b2754`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 21 13 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
getBossIsCreate((int *)iVar1, (int *)iVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b2754(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 3)) {
    if (*(int *)(iVar3 + 0x708) == 0) {
      *puVar2 = 0;
    }
    else {
      iVar4 = FUN_0896d6e0();
      if ((iVar4 == 0) || (*(int *)(iVar3 + 0x180) == -1)) {
        *puVar2 = 0;
      }
      else {
        *puVar2 = 1;
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

