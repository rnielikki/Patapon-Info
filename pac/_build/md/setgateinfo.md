# setGateInfo

Binds an gate opening action object to another object. This can be dungeon or field structure.

This can control e.g. door open and limiting camera turn.

## Code Information

- **Name**: `setGateInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 bd 00`
- **Assembly Address in Memory** : `0x8923bc8`

## Parameters

- `(bool)bind_type` *(8 bytes)* : 0 has many types of binds, 1 will be connected to only `param_index` 2
- `(int)bind_identifier` *(8 bytes)* : `bind_identifier` from [setupAddDungeonWall](./setupadddungeonwall.md), if it's non-dungeon, set it manually.
- `(int)param_index` *(8 bytes)* : Index of the parameter, see below for the detail.
- `(int/index)param` *(8 bytes)* : If 1st parameter is 0, this is ID related. otherwise it is address.
   
If `bind_type` is 0, setup only 2 of `param_index` (in this case, the `param` is address).

### About `param_index`


- If `param_index` is 0, `param` is identifier of the object, obtained from [setupAddDungeonWall](./setupadddungeonwall.md)
   - For non-dungeon object, indexes tends to be less than 0, or very big (like 100000).
- If `param_index` is 1, `param` decides action type.
   - 0 does nothing, 1 blocks camera sight
   - door moving direction with lever: `4` is from up to down, `8` is from down to up. `0` does not move.
- If `param_index` is 2, `param` is address (offset from PAC file) to call (when being opened or destroyed). The address can be address of [cmd_end](./cmd_end.md).
- If `param_index` is 3, `param` can be 0, 1, 2. 1 opens door from very start.
- if `param_index` is 4, `param` is ["reqActor ID"](./setreqactoruniqueid.md) 3rd parameter of the lever gimmick.
   - The reqActor can be created later.
- if `param_index` is 5, `param` is *another* ["reqActor ID"](./setreqactoruniqueid.md) 3rd parameter of the lever gimmick.
   - The reqActor can be created later.
   - If there is no 2nd lever, **keep -1**. Multi dungeon has this because the door is activated with two levers.
- if `param_index` is 6, `param` decides whether the door closed *after* activating the lever. 0 does not close after once opened, 1 closes after few turns.

Please describe other `param` data following with `param_index`.

## Example

Here is one example in hex:

```25 16 bd 00 / 02 00 00 00 / 00 00 00 00 / 08 00 00 00 / 46 00 00 00 / 02 00 00 00 / 00 00 00 00 / 08 00 00 00 / 48 00 00 00```

Which is interpreted as:

```c
setGateInfo((int)0, ((global)int *)giVar70, (int)0, ((global)int *)giVar72)
```

This is how the `setGateInfo` is used in a field.

```c
00004AEC  25000700:cmd_mov(8:46, 0.0)
00004B00  25000700:cmd_mov(8:48, -1.0)
00004B14  2516BD00:setGateInfo(2:0, 8:46, 2:0, 8:48)
00004B38  2516BD00:setGateInfo(2:0, 8:46, 2:1, 2:0)
00004B5C  2516BD00:setGateInfo(2:0, 8:46, 2:2, 1:368)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08923bc8(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int *piVar3;
  undefined4 *puVar4;
  int iVar5;
  undefined4 uVar6;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  uVar6 = *(undefined4 *)(*(int *)(param_1 + 0x10) + 0x118);
  if (*piVar1 == 0) {
    iVar5 = FUN_088b25fc(uVar6,*puVar2);
    if (iVar5 == 0) {
      iVar5 = FUN_088b24c4(uVar6,*puVar2);
    }
  }
  else {
    iVar5 = FUN_088b2648(uVar6,*puVar2);
  }
  if (iVar5 != 0) {
    *(undefined4 *)(iVar5 + *piVar3 * 4) = *puVar4;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

