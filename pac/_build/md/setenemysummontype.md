# setEnemySummonType

Registers summon type for enemy side.

## Code Information

- **Name**: `setEnemySummonType`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 27 00`
- **Assembly Address in Memory** : `0x897163c`

## Parameters

- `(int)summon_id` *(8 bytes)* : [The ID of the summon](./guide/reference-table.md#summon-ids) to give to the enemy.

## Example

Here is one example in hex:

```25 0c 27 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setEnemySummonType((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0897163c(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 uVar2;
  int iVar3;
  uint *puVar4;
  int iVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar5 = *piVar1;
  if ((iVar5 < 0) || (8 < iVar5)) {
    _DAT_08b826e4 = 0xffffffff;
  }
  else {
    uVar2 = Save::Get_Save_BaseAddr(1);
    iVar3 = Save::Get_BaseAddr__0x78(uVar2,1);
    puVar4 = (uint *)(*(int *)(iVar3 + 0x44) + 0x7df4);
    if (puVar4 != (uint *)0x0) {
      iVar5 = Equipment::Set_Eqid_10000x(iVar5 + 0xc,9999);
      *puVar4 = *puVar4 & 1 | iVar5 << 1;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

