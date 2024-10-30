# cmd_waitFrame

Wait for a frame before executing the next instruction.

Used by e.g. Screen fading.

This pauses pac instruction execution until the next frame.

## Code Information

- **Name**: `cmd_waitFrame`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 0f 00`
- **Assembly Address in Memory** : `0x8838434`

## Parameters

- `(Int)frames_to_wait` *(8 bytes)* : Amount of frame to wait. Usually it is 1.

## Example

Here is one example in hex:

```25 00 0f 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
cmd_waitFrame((int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08838434(undefined4 param_1,undefined4 param_2)

{
  int iVar1;
  undefined4 *puVar2;
  
  iVar1 = Get_Execution_Pause_Phase(param_2);
  if (iVar1 == 0) {
    puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
    Set_FrameTime_Counter(param_2,*puVar2);
    Pause_Execution(param_2,1);
  }
  iVar1 = Get_FrameTime_Counter(param_2);
  if (iVar1 < 1) {
    Set_FrameTime_Counter(param_2,0);
    PAC::PAC_setCmdId(param_2,0);
  }
  else {
    iVar1 = Get_FrameTime_Counter(param_2);
    Set_FrameTime_Counter(param_2,iVar1 + -1);
  }
  return;
}
```

