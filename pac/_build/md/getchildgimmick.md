# getChildGimmick

Gets a child gimmick handle by parent handle and child gimmick ID.

## Code Information

- **Name**: `getChildGimmick`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 52 00`
- **Assembly Address in Memory** : `0x8916f0c`

## Parameters

- `(int *)handle_parent` *(8 bytes)* : [Handle](./gimmick_gethandle.md) of the **parent** gimmick.
- `(int)gimmick_id` *(8 bytes)* : **Child** Gimmick ID from various place, e.g. [addGimmick](./addgimmick.md), [getGateInfo](./getgateinfo.md) or [registConstGimmick](./registconstgimmick.md).
- `(int *)destination` *(8 bytes)* : Variable to *store* the **child gimmick handle**.

## Example

Here is one example in hex:

```25 17 52 00 / 08 00 00 00 / 40 01 00 00 / 02 00 00 00 / 36 02 00 00 / 08 00 00 00 / 41 01 00 00```

Which is interpreted as:

```c
getChildGimmick(((global)int *)giVar320, (int)566, ((global)int *)giVar321)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08916f0c(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int *piVar3;
  int iVar4;
  int iVar5;
  uint uVar6;
  uint *puVar7;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  *piVar3 = -1;
  if (*piVar1 != -1) {
    iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    puVar7 = *(uint **)(iVar4 + 0x108);
    if ((puVar7[2] ^ *(uint *)(iVar4 + 0x10c) |
        *puVar7 ^ *(uint *)(iVar4 + 0x104) | puVar7[1] ^ *(uint *)(iVar4 + 0x108)) != 0) {
      uVar6 = puVar7[2];
      while ((iVar5 = (**(code **)(*(int *)(uVar6 + 4) + 0x34))(uVar6), iVar5 != 10 ||
             (*piVar2 != *(int *)(*(int *)(*(int *)(uVar6 + 0x20c) + 0x14) + 0x18)))) {
        uVar6 = _DAT_00000004;
        if (puVar7 != (uint *)0x0) {
          puVar7 = (uint *)puVar7[1];
          uVar6 = puVar7[1];
        }
        if ((puVar7[2] ^ *(uint *)(iVar4 + 0x10c) |
            *puVar7 ^ *(uint *)(iVar4 + 0x104) | uVar6 ^ *(uint *)(iVar4 + 0x108)) == 0)
        goto LAB_08917088;
        uVar6 = puVar7[2];
      }
      *piVar3 = (int)*(short *)(uVar6 + 0x78);
    }
  }
LAB_08917088:
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

