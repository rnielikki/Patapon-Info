# getPlayerClassId

Gets [class ID](./guide/reference-table.md#class-ids) of the given player.

## Code Information

- **Name**: `getPlayerClassId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 51 00`
- **Assembly Address in Memory** : `0x891eda0`

## Parameters

- `(int)class_tree` *(8 bytes)* : The index of the player. 0 is hero, 1 is Ton, 2 is Chin, 3 is Kan.
- `(int *)destination` *(8 bytes)* : Variable to *store* the [class ID](./guide/reference-table.md#class-ids). -1 if the class is invalid.

## Example

Here is one example in hex:

```25 16 51 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 10 00 00 00```

Which is interpreted as:

```c
getPlayerClassId((int)0, (int *)iVar16)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891eda0(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  undefined4 uVar4;
  int iVar5;
  int iVar6;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0xffffffff;
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = *(int *)(iVar3 + 0xf8);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
  }
  if (iVar3 != 0) {
    uVar4 = Save::Get_Save_BaseAddr(1);
    iVar5 = Save::Get_BaseAddr__0x78(uVar4,1);
    iVar6 = 0;
    if (*(int *)(iVar5 + 0x44) != 0) {
      iVar5 = *(int *)(*(int *)(iVar5 + 0x44) + 0x28);
      iVar6 = iVar5 >> 2;
      if (iVar5 < 0) {
        iVar6 = iVar5 + 3 >> 2;
      }
    }
    uVar4 = FUN_088a8650(iVar3,iVar6);
    iVar5 = *piVar1;
    iVar3 = 0;
    if (iVar5 == 3) {
      iVar3 = Is_Class_Tree(uVar4,3,0);
    }
    else if (iVar5 == 2) {
      iVar3 = Is_Class_Tree(uVar4,2,0);
    }
    else if (iVar5 == 1) {
      iVar3 = Is_Class_Tree(uVar4,1,0);
    }
    else if (iVar5 == 0) {
      iVar3 = FUN_088df7ac(uVar4);
    }
    if (iVar3 != 0) {
      *puVar2 = *(undefined4 *)(*(int *)(iVar3 + 0xa14) + 0x18c);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

