# resetCollisionShapeBox

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `resetCollisionShapeBox`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 26 00`
- **Assembly Address in Memory** : `0x89b3928`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*
- `(undefined4)Var4` *(8 bytes)*

## Example

Here is one example in hex:

```25 21 26 00 / 08 00 00 00 / 37 01 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 80 3f / 10 00 00 00 / 00 00 80 3f```

Which is interpreted as:

```c
resetCollisionShapeBox(((global)int *)giVar311, (float)0, (float)0, (float)1, (float)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b3928(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  int iVar6;
  int iVar7;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  iVar6 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (((iVar6 != 0) && (iVar7 = (**(code **)(*(int *)(iVar6 + 4) + 0x34))(iVar6), iVar7 == 0xb)) &&
     (iVar6 = FUN_088dcfcc(*(undefined4 *)(iVar6 + 0xd0)), iVar6 != 0)) {
    local_c = *puVar5;
    local_10 = *puVar4;
    local_4 = *puVar3;
    local_8 = *puVar2;
    FUN_0886f4dc(iVar6,&local_8,&local_10);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

