# setSquadBasePosition

Gets squad base position *without* additional attack movement.

## Code Information

- **Name**: `setSquadBasePosition`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 41 00`
- **Assembly Address in Memory** : `0x891dc68`

## Parameters

- `(int *)squad_handle` *(8 bytes)* : The [squad handle](./guide/how-to-get-a-handle.md) of the squad to set the position.
- `(float)position` *(8 bytes)* : X Position as PSP Pixel in the world, to set the squad base position.

## Example

Here is one example in hex:

```25 16 41 00 / 08 00 00 00 / a8 00 00 00 / 20 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setSquadBasePosition(((global)int *)giVar168, (float *)fVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891dc68(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  uint uVar5;
  int iVar6;
  uint *puVar7;
  undefined4 local_30;
  undefined4 local_2c;
  undefined4 local_28;
  undefined4 local_24;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if (((-1 < *piVar1) &&
      (iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*piVar1,1), iVar3 != 0)
      ) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 3)) {
    iVar6 = iVar3 + 0x260;
    FUN_08955e28(iVar6,0);
    iVar4 = offset__10(iVar6);
    local_2c = *(undefined4 *)(iVar4 + 4);
    local_28 = *(undefined4 *)(iVar4 + 8);
    local_24 = *(undefined4 *)(iVar4 + 0xc);
    local_30 = *puVar2;
    FUN_08955db8(iVar6,&local_30);
    puVar7 = *(uint **)(iVar3 + 0x5c);
    if ((puVar7[2] ^ *(uint *)(iVar3 + 0x60) |
        *puVar7 ^ *(uint *)(iVar3 + 0x58) | puVar7[1] ^ *(uint *)(iVar3 + 0x5c)) != 0) {
      uVar5 = puVar7[2];
      while( true ) {
        if (uVar5 != 0) {
          FUN_0890b798(uVar5 + 0x4c0,1);
        }
        uVar5 = _DAT_00000004;
        if (puVar7 != (uint *)0x0) {
          puVar7 = (uint *)puVar7[1];
          uVar5 = puVar7[1];
        }
        if ((puVar7[2] ^ *(uint *)(iVar3 + 0x60) |
            *puVar7 ^ *(uint *)(iVar3 + 0x58) | uVar5 ^ *(uint *)(iVar3 + 0x5c)) == 0) break;
        uVar5 = puVar7[2];
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

