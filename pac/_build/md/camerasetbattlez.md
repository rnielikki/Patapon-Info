# cameraSetBattleZ

Sets camera zoom amount when enemies are in sight and out of sight.

Does not affect the zoom when heromode starts.

## Code Information

- **Name**: `cameraSetBattleZ`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 95 00`
- **Assembly Address in Memory** : `0x89221f8`

## Parameters

- `(float)distance_nosight` *(8 bytes)* : Camera distance when enemy is not on sight (zoom in). Default is 160.0.
- `(float)distance_onsight` *(8 bytes)* : Camera distance when enemy is on sight (zoom out). Default is 200.0.

## Example

Here is one example in hex:

```25 16 95 00 / 10 00 00 00 / 00 00 20 43 / 10 00 00 00 / 00 00 48 43```

Which is interpreted as:

```c
cameraSetBattleZ((float)160, (float)200)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089221f8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 uVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if ((*(int *)(param_1 + 0x10) != 0) && (*(int *)(*(int *)(param_1 + 0x10) + 0xd8) != 0)) {
    uVar3 = FUN_0890fa6c();
    FUN_0890d724(*puVar1,*puVar2,uVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

