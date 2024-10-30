# setClassData

Sets unlock status, experience or class skill experience for a class.

## Code Information

- **Name**: `setClassData`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 10 00`
- **Assembly Address in Memory** : `0x894a28c`

## Parameters

- `(int)unit_type` *(8 bytes)* : 0 is Hero, 1 is Ton, 2 is Chin, 3 is Kan.
- `(int)class_id` *(8 bytes)* : [Class ID](./guide/reference-table.md#class-ids).
- `(int)data_type` *(8 bytes)* : Expected 0~2.
- `(bool/int/float)class_data` *(8 bytes)* : Depends on `data_type`.

|`data_type`|type of `class_data`|`class_data`|info|
|---|---|---|---|
|0|lock/unlock|0 locks the character, 1 opens the character|
|1|int|level||
|2|float|class skill exp|CS exp percentage per each, 3~5 is max depends on class.|

## Example

Here is one example in hex:

```25 0a 10 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 02 00 00 00 / 02 00 00 00 / 01 00 00 00 / 10 00 00 00 / 00 00 80 3f```

Which is interpreted as:

```c
setClassData((int)0, (int)2, (int)1, (float)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894a28c(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  undefined4 *puVar4;
  int iVar5;
  int iVar6;
  int iVar7;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar6 = *piVar1;
  piVar1 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar7 = *piVar1;
  piVar1 = (int *)Pac_Get_Param(param_2,2,1,4);
  iVar5 = *piVar1;
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  iVar3 = Save::Get_Save_BaseAddr(1);
  iVar3 = return__0x1c(*(undefined4 *)(iVar3 + 0x50));
  iVar3 = iVar6 * 0x1620 + iVar3 + 0x9500;
  puVar4 = (undefined4 *)0x0;
  if (iVar3 != 0) {
    puVar4 = (undefined4 *)(iVar3 + iVar7 * 0x84 + 0x14);
  }
  if (puVar4 != (undefined4 *)0x0) {
    if (iVar5 == 2) {
      puVar4[0x14] = *puVar2;
      puVar4[0x15] = *puVar2;
      puVar4[0x16] = *puVar2;
      puVar4[0x17] = *puVar2;
      puVar4[0x18] = *puVar2;
      puVar4[0x19] = *puVar2;
      puVar4[0x1a] = *puVar2;
      puVar4[0x1b] = *puVar2;
      if (iVar7 != 0x19) {
        FUN_089600a8(puVar4);
      }
    }
    else if (iVar5 == 1) {
      FUN_0894b264(param_1,iVar3,puVar4,iVar7,*puVar2);
    }
    else if (iVar5 == 0) {
      *puVar4 = *puVar2;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

