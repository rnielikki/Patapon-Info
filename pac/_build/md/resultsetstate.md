# resultSetState

Defines mission state, e.g. success or failure.

## Code Information

- **Name**: `resultSetState`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 19 00`
- **Assembly Address in Memory** : `0x891a720`

## Parameters

- `(int)mission_status` *(8 bytes)* : See the table below
- `(int)result_state` *(8 bytes)* : 5 is Hideout, 7 is Mission success, 8 is Defeat.
   - 7 and 8 requires mission end flag (2) in `mission_status`, otherwise it is always back to hideout.
- `(bool)load_next` *(8 bytes)* : Decides if next PAC instruction file should be loaded, but *keep this as 0*.
- `(undefined4)Var3` *(8 bytes)* : Keep this as 0.
- `(undefined4)Var4` *(8 bytes)* : Keep this as 0.
- `(String)next_pac_file`: Next PAC file name to load. If the story PAC file is [already preloaded](./readarcfile.md), or the next scene is not called, can leave as empty string.

**Only first and second parameters do their work.** Keep others 0 or empty string.

For `mission_status`:

|ID|Status|
|---|---|
|0|???|
|1|During Mission|
|2|Mission End|
|3|Back to hideout|
|5|Dungeon floor clear, selecting|
|6|*Instantly* go to hideout|
|7|Celebrating and go to hideout (no result screen)|
|8|Loads next floor|
|9+|Defeat|

## Remarks

For cutscene after the mission, use this method instead.

```
cmd_mov(8:4D, 293.0)
```

293.0 here is scene ID. (If the scene ID is invalid, the game will be crashed.)

The scene range is 292~322, observed in `mission_99_00.pac`.

## Example

Here is one example in hex:

```25 16 19 00 / 02 00 00 00 / 02 00 00 00 / 02 00 00 00 / 08 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
resultSetState((int)2, (int)8, (int)0, (int)0, (int)0, "")
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891a720(int param_1,undefined4 param_2)

{
  undefined *puVar1;
  undefined4 *puVar2;
  undefined2 *puVar3;
  int *piVar4;
  undefined4 *puVar5;
  undefined4 *puVar6;
  undefined *puVar7;
  int iVar8;
  undefined *puVar9;
  int iVar10;
  undefined2 local_164;
  undefined local_162;
  undefined local_161;
  undefined2 local_160;
  undefined2 local_15e;
  undefined2 local_15c;
  undefined2 local_15a;
  undefined2 local_158;
  undefined2 local_156;
  undefined auStack340 [16];
  undefined auStack324 [8];
  undefined auStack316 [8];
  undefined auStack308 [8];
  undefined auStack300 [8];
  undefined auStack292 [8];
  undefined auStack284 [8];
  undefined auStack276 [8];
  undefined4 local_10c;
  undefined4 local_108;
  undefined4 local_104;
  undefined local_100 [256];
  
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
                    // 0: Mission fail
                    // 1: Infinite march lmao
                    // 2: Finished all levels
                    // 5: Still in dungeon, asking what will do next
                    // 6: Going to hideout (Doesn't add loot)
                    // 7: mission success?
                    // 8: Loads next floor
                    // 9+: Defeat
  puVar3 = (undefined2 *)Pac_Get_Param(param_2,1,1,4);
                    // 5: Hideout / 7 : Mission success / 8 : Defeat
                    // 7 and 8 requires other flag to state "this is mission end"
                    // otherwise it's always back to hideout
  piVar4 = (int *)Pac_Get_Param(param_2,2,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar6 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  puVar7 = &DAT_00000100;
  puVar9 = local_100;
  puVar1 = puVar9;
  while (puVar1 != (undefined *)0x0) {
    *puVar9 = 0;
    puVar9 = puVar9 + 1;
    puVar7 = puVar7 + -1;
    puVar1 = puVar7;
  }
  Pac_Get_StringParam(param_2,local_100);
  local_104 = 0;
  local_108 = 0;
  if (*piVar4 != 0) {
    FUN_088154c0(local_100,s_Mission__d__d_pac_08a5fcd4,&local_104,&local_108);
  }
  iVar8 = Get_Some_Flag(1);
  iVar10 = *(int *)(iVar8 + 0x44);
  iVar8 = *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x3c);
  local_164 = 0;
  local_162 = 0;
  local_161 = 0;
  local_160 = 0;
  local_15e = 0;
  local_15c = 0;
  local_15a = 0;
  Syscall::Kernel::Kernel_Memset(auStack340,0,0x10);
  Syscall::Kernel::Kernel_Memset(auStack324,0,8);
  Syscall::Kernel::Kernel_Memset(auStack316,0,8);
  Syscall::Kernel::Kernel_Memset(auStack308,0,8);
  Syscall::Kernel::Kernel_Memset(auStack300,0,8);
  Syscall::Kernel::Kernel_Memset(auStack292,0,8);
  Syscall::Kernel::Kernel_Memset(auStack284,0,8);
  Syscall::Kernel::Kernel_Memset(auStack276,0,8);
  local_10c = *(undefined4 *)(iVar10 + 0x28);
                    // get mission status 1
                    // get mission status 2
  local_164 = (undefined2)*puVar2;
  local_162 = (undefined)*puVar3;
  local_161 = (undefined)*(undefined2 *)piVar4;
  local_160 = (undefined2)*puVar5;
  local_15e = (undefined2)*puVar6;
  local_15c = (undefined2)local_104;
  local_15a = (undefined2)local_108;
  local_158 = 0xffff;
  local_156 = 0xffff;
  (**(code **)(*(int *)(iVar8 + 4) + 0x24))(iVar8,&local_164);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

