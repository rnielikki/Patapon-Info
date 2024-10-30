# resultGetState

Gets current mission status.

Called every time in the mission to check the mission status.

## Code Information

- **Name**: `resultGetState`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 17 00`
- **Assembly Address in Memory** : `0x891a568`

## Parameters

- `(int *)mission_status` *(8 bytes)* : See [resultSetState](./resultsetstate.md) for detail.
- `(int *)result_state` *(8 bytes)* : See [resultSetState](./resultsetstate.md) for detail.
- `(bool *)is_mission_end` *(8 bytes)* : If the mission is finished or not. 0 is ongoing, 1 is finished.

## Example

Here is one example in hex:

```25 16 17 00 / 08 00 00 00 / 15 00 00 00 / 08 00 00 00 / 16 00 00 00 / 08 00 00 00 / 17 00 00 00```

Which is interpreted as:

```c
resultGetState(((global)int *)giVar21, ((global)int *)giVar22, ((global)int *)giVar23)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891a568(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 uVar2;
  undefined4 *puVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  uVar2 = Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x3c);
  (**(code **)(*(int *)(iVar4 + 4) + 0x3c))(iVar4,piVar1,uVar2);
  uVar2 = (**(code **)(*(int *)(iVar4 + 4) + 0x30))(iVar4);
  *puVar3 = uVar2;
  if (*piVar1 == 1) {
    *puVar3 = 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

